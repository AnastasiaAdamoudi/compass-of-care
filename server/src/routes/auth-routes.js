const express = require('express');
const { auth } = require('express-openid-connect');

const configAuth = {
  authRequired: false,
  auth0Logout: true,
  secret: '4ff92438b6c678c3f7d5ac5fbd391a6cf3a88c6e3e6124975786b62b7457cfeb',
  baseURL: 'http://localhost:3000',
  clientID: 'j4UynohYQfjqiZbGcbxMGTlHtl8yTybF',
  issuerBaseURL: 'https://dev-vrinqbgmiee5c5t4.us.auth0.com'
};

const configureAuth = (app) => {
  // Configure authentication middleware
  app.use(auth(configAuth));

  // Define routes
  app.get('/', (req, res) => {
    if (req.oidc.isAuthenticated()) {
      res.redirect('/home');
    } else {
      res.redirect('/login');
    }
  });

  app.get('/home', (req, res) => {
    // Check if user is authenticated
    if (req.oidc.isAuthenticated()) {
      res.send('Logged in');
    } else {
      res.redirect('/');
    }
  });

  // Logout route
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

module.exports = configureAuth;
