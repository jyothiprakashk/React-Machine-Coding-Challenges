export const EXPLORER_CONFIG = {
  name: "root",
  isFolder: true,
  id: 1,
  path: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      path: [
        { id: 3, name: "index.html", isFolder: false, path: [] },
        { id: 4, name: "manifest.json", isFolder: false, path: [] },
      ],
    },
    {
      id: 5,
      name: "src",
      isFolder: true,
      path: [
        { id: 6, name: "App.js", isFolder: false, path: [] },
        {
          id: 7,
          name: "Components",
          isFolder: true,
          path: [{ id: 8, name: "Modal.js", isFolder: false, path: [] }],
        },
      ],
    },
  ],
};
