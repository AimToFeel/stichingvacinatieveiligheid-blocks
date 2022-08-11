(function (blocks, editor, i18n, element, blockEditor, components) {
  const el = element.createElement;
  const __ = i18n.__;
  const RichText = editor.RichText;
  const useBlockProps = blockEditor.useBlockProps;
  const InspectorControls = blockEditor.InspectorControls;
  const ToggleControl = components.ToggleControl;

  blocks.registerBlockType("accordion/stichingvacinatieveiligheid-blocks", {
    example: {
      attributes: {
        content: __("Dit is een accordion."),
        title: __("Titel"),
        warning: __("Dit is een waarschuwing"),
        warningHidden: false,
      },
    },

    edit: function (props) {
      const content = props.attributes.content ?? 'Dit is een accordion.';
      const title = props.attributes.title ?? 'Titel';
      const warning = props.attributes.warning ?? 'Waarschuwing';
      const warningHidden = props.attributes.warningHidden ?? true;

      return el(
        "div",
        useBlockProps({
          style: {
            border: "1px solid #cecece",
          },
        }),
        [
          el(
            InspectorControls,
            useBlockProps({ key: 'setting' }),
            el(
              'div',
              useBlockProps({}),
              [
                el(
                  ToggleControl,
                  useBlockProps({
                    label: 'Waarschuwing verborgen',
                    onChange: (newContent) => {
                      props.setAttributes({ warningHidden: newContent });
                    },
                    checked: warningHidden,
                  })
                )
              ]
            )
          ),
          el(
            "div",
            useBlockProps({
              style: {
                display: 'flex',
                'flex-direction': 'row',
                margin: 0,
                background: "#2b6697",
              }
            }),
            [
              el(
                RichText,
                useBlockProps({
                  tagName: "h2",
                  style: {
                    flex: 1,
                    padding: 16,
                    margin: 0,
                    color: "#fff",
                    "text-align": "center",
                  },
                  onChange: (newContent) => {
                    props.setAttributes({ title: newContent });
                  },
                  value: title,
                  id: 'attribute-title'
                })
              ),
              el(
                RichText,
                useBlockProps({
                  tagName: "span",
                  style: {
                    color: "#fff",
                  },
                  id: 'attribute-warning',
                  hidden: warningHidden,
                  onChange: (newContent) => {
                    props.setAttributes({ warning: newContent });
                  },
                  value: warning,
                }),
              )
            ]
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
                id: 'attribute-content'
              })
            )
          ),
        ]
      );
    },

    save: function (props) {
      const content = props.attributes.content ?? 'Dit is een accordion.';
      const title = props.attributes.title ?? 'Titel';
      const warning = props.attributes.warning ?? 'Waarschuwing';
      const warningHidden = props.attributes.warningHidden ?? true;

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
                  id: 'attribute-title'
                }),
                title
              ),
              el(
                'span',
                useBlockProps.save({
                  style: {
                    color: "#fff",
                  },
                  class: 'accordion__warning-label',
                  id: 'attribute-warning',
                  hidden: warningHidden
                }),
                warning
              ),
              el(
                "i",
                useBlockProps.save({
                  class: "arrow arrow--down arrow--white arrow--large",
                })
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
                class: "page__content"
              }),
              el(
                RichText.Content,
                useBlockProps.save({
                  tagName: "p",
                  value: content,
                  id: 'attribute-content'
                }),
                null
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
  window.wp.blockEditor,
  window.wp.components
);
