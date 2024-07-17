[
      {
        path: "/",
        element: "<Dashboard />",
      },
      // {
      //   path: "/marketplace",
      //   element: "<Marketplace />",
      // },
      {
        path: "/marketplace/add-project",
        element: "<AddProject />",
      },
      {
        path: "/marketplace/view-properties",
        element: "<ViewProperties />",
      },
      {
        path: "/marketplace/view-properties/add-property",
        element: "<AddProjectProperty />",
      },
      {
        path: "/upcoming-pages",
        element: "<UpcomingPage />",
      },
      {
        path: "/favorties",
        element: "<Favorites />",
      },
      {
        path: "/overview",
        element: "<Overview />",
      },
      {
        path: "/my-properties",
        element: "<MyProperties />",
      },
      {
        path: "/my-properties/add-property",
        element: "<AddProperty />",
      },
      {
        path: "/payouts",
        element: "<Payouts />",
      },
      {
        path: "/settings",
        element: "<Settings />",
      },
      {
        path: "/property-detail/:id",
        element: "<PropertyDetail />",
      },
    ].map(item => {
        console.log(`<Route path="${item.path}" element={${item.element}}/>`)
    })


// [
//   { path: "register", element: "<Register />" },
//   { path: "login", element: "<Login />" },
//   {
//     path: "/marketplace",
//     element: "<Marketplace />",
//   },
//   {
//     path: "forgot-password",
//     element: "<ForgotPassword />",
//     children: [],
//   },
// ].map(item => {
//         console.log(`<Route path="${item.path}" element={${item.element}}/>`)
//     })