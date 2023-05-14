export const environment = {
  production: true,
  auth0: {
    domain: 'dev-ve5jqdhndo53k8rf.us.auth0.com',
    clientId: 'wgykHRP8NGn7SqlZb5oe5oGN4MSDucpj',
    authorizationParams: {
      redirect_uri: 'http://localhost:4040/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:6060',
  },
};
