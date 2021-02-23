module.exports = {
  // We want to manually init the config file
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: "git-gateway",
    branch: "master",
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: "public/images/",

  // Where to link the images
  public_folder: "images/",

  // The Pages collection
  collections: [
    {
      name: "Pages",
      label: "Page",
      editor: { preview: false },
      label_singular: "Page",
      folder: "content/pages",
      create: true,
      format: "yaml-frontmatter",
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
          required: true,
        },
        {
          label: "Builder",
          name: "builder",
          widget: "list",
          types: [
            {
              label: "Header Image",
              name: "header",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: true,
                },
                {
                  label: "Background Image",
                  name: "photo",
                  widget: "image",
                  required: true,
                  media_library: { config: { multiple: false } },
                },
              ],
            },
            {
              label: "CTA Section",
              name: "cta",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: true,
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Content",
              name: "content",
              widget: "object",
              fields: [
                {
                  name: "content",
                  widget: "markdown",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
