(function (blocks, editor, i18n, element, blockEditor) {
  const el = element.createElement;
  const __ = i18n.__;
  const RichText = editor.RichText;
  const useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType("aimtofeel/stichingvacinatieveiligheid-blocks", {
    icon: "editor-kitchensink",
    category: "layout",

    attributes: {
      content: {
        type: "array",
        source: "children",
        selector: "p",
      },
      title: {
        type: "string",
        source: "html",
        selector: "h2",
      },
    },

    example: {
      attributes: {
        content: __("Dit is een accordion."),
        title: __("Titel"),
      },
    },

    edit: function (props) {
      const content = props.attributes.content;
      const title = props.attributes.title;

      return el(
        "div",
        useBlockProps({
          style: {
            border: "1px solid #cecece",
          },
        }),
        [
          el(
            RichText,
            useBlockProps({
              tagName: "h2",
              style: {
                padding: 16,
                margin: 0,
                background: "#2b6697",
                color: "#fff",
                "text-align": "center",
              },
              onChange: (newContent) => {
                props.setAttributes({ title: newContent });
              },
              value: title,
            })
          ),
          el(
            "div",
            useBlockProps({
              style: {
                padding: 16,
                margin: 0,
              },
            }),
            el(
              RichText,
              useBlockProps({
                tagName: "p",
                className: props.className,
                onChange: (newContent) => {
                  props.setAttributes({ content: newContent });
                },
                value: content,
              })
            )
          ),
        ]
      );
    },

    save: function (props) {
      return el(
        "section",
        useBlockProps.save({
          class: "accordion",
        }),
        [
          el(
            "header",
            useBlockProps.save({
              class: "accordion__header relative",
            }),
            [
              el(
                "h2",
                useBlockProps.save({
                  class: "accordion__title",
                }),
                props.attributes.title
              ),
              el(
                "i",
                useBlockProps.save({
                  class: "arrow arrow--down arrow--white arrow--large",
                }),
                null
              ),
            ]
          ),
          el(
            "article",
            useBlockProps.save({
              class: "accordion__content",
            }),
            el(
              "div",
              useBlockProps.save({
                class: "page__content",
              }),
              el(
                RichText.Content,
                useBlockProps.save({
                  tagName: "p",
                  value: props.attributes.content,
                })
              )
            )
          ),
        ]
      );
    },
  });
})(
  window.wp.blocks,
  window.wp.editor,
  window.wp.i18n,
  window.wp.element,
  window.wp.blockEditor
);
