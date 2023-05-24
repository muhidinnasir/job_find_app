import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'https://api.ashewa.com/graphql/',
  cache: new InMemoryCache(
    {
        typePolicies: {
          Query: {
            fields: {
              cartNumber: {
                read() {
                  return cartNumberVar();
                },
              },
              auth: {
                read() {
                  return authVar();
                },
              },
              wishlist: {
                read() {
                  return wishlistVar();
                },
              },
              filterProducts: {
                keyArgs: ["filter"],
                merge(
                  existing = {
                    objects: [],
                  },
                  incoming
                ) {
                  return {
                    ...incoming,
                    objects: [...existing.objects, ...incoming.objects],
                  };
                },
              },
            },
          },
        },
      }
  ),
});
