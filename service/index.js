const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = [];
let cats = [];



// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetCat
apiRouter.get('/cats', verifyAuth, (_req, res) => {  res.send(cats);
});

// SubmitCat
apiRouter.post('/cats', verifyAuth, (req, res) => {
    // console.log('made to post')
    // console.log(cats);
    // console.log(req.body);
  cats = updateCats(req.body);
  console.log(cats);

  res.send(cats);
});

// delete cat
apiRouter.delete('/cats', async (req, res) => {
  // const user = await findUser('token', req.cookies[authCookieName]);
  // if (user) {
  //   delete user.token;
  // }
  // res.clearCookie(authCookieName);
  // cats.pop(req.body);
  console.log(req.body);
  // const cat = req.body;
  // console.log(cat.name);
  // console.log(cat.symtoms);
  const passedCat = [req.body.name, req.body.symtoms[0], req.body.symtoms[1], req.body.symtoms[2], req.body.age, req.body.diagnosis];
  console.log(passedCat);
  cats.pop(passedCat);
  console.log(passedCat);
  res.status(204).end();
});

// Default error handler
app.use(function (err, req, res, next) {
    // console.log('fail')
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function updateCats(newCat) {
  // let found = false;
  
  const catArray = [newCat.name, newCat.symtoms[0], newCat.symtoms[1], newCat.symtoms[2], newCat.age, newCat.diagnosis];
  console.log(catArray)

  // for (const [i,cat] of cats.entries()) {
  //   console.log(cat);
  //   if (cat == catArray) {
  //     found = true;
  //   }
  // }
  // if (catArray in cats.entries()) {
  //   console.log("found");
  //   found = true;
  // } else {
  //   console.log("should add");
  // }

  // if (!found) {
  //   // console.log("adding");
  //   // const catArray = newCat.symtoms.concat([newCat.age, newCat.diagnosis]);
  //   // console.log(catArray);
  //   // cats.set(newCat.name, catArray);
  //   // cats.push([newCat.name].concat(catArray));
    
  // }
  cats.push(catArray);
  console.log(cats);

  return cats;
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
