(function (blocks, editor, i18n, element, blockEditor, components) {
  const el = element.createElement;
  const __ = i18n.__;
  const RichText = editor.RichText;
  const useBlockProps = blockEditor.useBlockProps;
  const InspectorControls = blockEditor.InspectorControls;
  const TextControl = components.TextControl;

  blocks.registerBlockType("claim-cta/stichingvacinatieveiligheid-blocks", {
    example: {
      attributes: {
        title: __("Wist je dat je bij ernstige aantoonbare bijwerkingen een claim kunt indienen?"),
        secondaryButton: __("Meer info"),
        primaryButton: __("Doe een claim"),
        primaryButtonLink: __("https://vaccinclaim.com")
      },
    },

    edit: function (props) {
      const title = props.attributes.title ?? __("Wist je dat je bij ernstige aantoonbare bijwerkingen een claim kunt indienen?");
      const secondaryButton = props.attributes.secondaryButton ?? __("Meer info");
      const primaryButton = props.attributes.primaryButton ?? __("Doe een claim");
      const primaryButtonLink = props.attributes.primaryButtonLink ?? __("https://vaccinclaim.com");
      const secondaryButtonLink = props.attributes.secondaryButtonLink ?? __("https://vaccinclaim.com");

      return el(
        "div",
        useBlockProps({
          style: {
            display: 'flex',
            'flex-direction': 'column',
            background: '#fcf7c7',
            padding: '16px'
          }
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
                  TextControl,
                  useBlockProps({
                    label: 'Secondaire knop link',
                    onChange: (newContent) => {
                      props.setAttributes({ secondaryButtonLink: newContent });
                    },
                    value: secondaryButtonLink
                  })
                ),
                el(
                  TextControl,
                  useBlockProps({
                    label: 'Primaire knop link',
                    onChange: (newContent) => {
                      props.setAttributes({ primaryButtonLink: newContent });
                    },
                    value: primaryButtonLink,
                  })
                )
              ]
            )
          ),
          el(
            RichText,
            useBlockProps({
              tagName: "p",
              style: {
                flex: 1,
                'text-align': 'center',
                margin: 0,
                'margin-bottom': '16px'
              },
              onChange: (newContent) => {
                props.setAttributes({ title: newContent });
              },
              value: title,
              id: 'attribute-title'
            }),
          ),
          el(
            'div',
            useBlockProps({style: {
              display: 'flex',
              flex: 1,
              'flex-direction': 'row',
              'justify-content': 'center',
              margin: 0,
            }}),
            [
              el(
                RichText,
                useBlockProps({
                  tagName: "button",
                  style: {
                    border: 'none',
                    background: '#f5e251',
                    color: '#000',
                    margin: 0,
                    'line-height': '52px',
                    padding: '0 16px'
                  },
                  onChange: (newContent) => {
                    props.setAttributes({ secondaryButton: newContent });
                  },
                  value: secondaryButton,
                  id: 'attribute-secondary-button'
                })
              ),
              el(
                RichText,
                useBlockProps({
                  tagName: "button",
                  style: {
                    border: 'none',
                    background: '#2b6697',
                    color: '#fff',
                    margin: 0,
                    'line-height': '52px',
                    padding: '0 16px'
                  },
                  onChange: (newContent) => {
                    props.setAttributes({ primaryButton: newContent });
                  },
                  value: primaryButton,
                  id: 'attribute-primary-button'
                })
              ),
            ]
          ),
        ]
      );
    },

    save: function (props) {
      const title = props.attributes.title ?? __("Wist je dat je bij ernstige aantoonbare bijwerkingen een claim kunt indienen?");
      const secondaryButton = props.attributes.secondaryButton ?? __("Meer info");
      const primaryButton = props.attributes.primaryButton ?? __("Doe een claim");
      const primaryButtonLink = props.attributes.primaryButtonLink ?? __("https://vaccinclaim.com");
      const secondaryButtonLink = props.attributes.secondaryButtonLink ?? __("https://vaccinclaim.com");

      return el(
        "article",
        useBlockProps.save({
          class: "claim-cta claim-cta--detail-page",
        }),
        [
          el(
            "h3",
            useBlockProps.save({
              class: "claim-cta__title",
              id: 'attribute-title'
            }),
            title
          ),
          el(
            "div",
            useBlockProps.save({
              class: "claim-cta__button-container",
            }),
            [
              el(
                "a",
                useBlockProps.save({
                  class: "claim-cta__button claim-cta__button--secondary",
                  href: secondaryButtonLink,
                  id: 'attribute-secondary-button'
                }),
                secondaryButton
              ),
              el(
                "a",
                useBlockProps.save({
                  class: "claim-cta__button",
                  href: primaryButtonLink,
                  id: 'attribute-primary-button'
                }),
                primaryButton
              ),
            ]
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
