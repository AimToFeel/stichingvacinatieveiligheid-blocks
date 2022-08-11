(function (blocks, editor, i18n, element, blockEditor, components) {
  const el = element.createElement;
  const __ = i18n.__;
  const RichText = editor.RichText;
  const useBlockProps = blockEditor.useBlockProps;
  const InspectorControls = blockEditor.InspectorControls;
  const TextControl = components.TextControl;

  blocks.registerBlockType("side-effects/stichingvacinatieveiligheid-blocks", {
    example: {
      attributes: {
        title: __("Bij dit vaccin zijn de volgende bijwerkingen gemeld:"),
        description: __("Reacties op de plek, vermoeidheid, hoofdpijn, niet lekker voelen, koorts, spierpijn, misselijkheid, braken, koude rillingen, diarree"),
        primaryButton: __("Meer over bijwerkingen"),
        primaryButtonLink: __("/bijwerkingen")
      },
    },

    edit: function (props) {
      const title = props.attributes.title ?? __("Bij dit vaccin zijn de volgende bijwerkingen gemeld:");
      const description = props.attributes.secondaryButton ?? __("Reacties op de plek, vermoeidheid, hoofdpijn, niet lekker voelen, koorts, spierpijn, misselijkheid, braken, koude rillingen, diarree");
      const primaryButton = props.attributes.primaryButton ?? __("Meer over bijwerkingen");
      const primaryButtonLink = props.attributes.primaryButtonLink ?? __("/bijwerkingen");

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
            RichText,
            useBlockProps({
              tagName: "p",
              style: {
                flex: 1,
                'text-align': 'center',
                margin: 0,
                'margin-bottom': '16px',
                color: '#2b6697'
              },
              onChange: (newContent) => {
                props.setAttributes({ description: newContent });
              },
              value: description,
              id: 'attribute-description'
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
      const title = props.attributes.title ?? __("Bij dit vaccin zijn de volgende bijwerkingen gemeld:");
      const description = props.attributes.secondaryButton ?? __("Reacties op de plek, vermoeidheid, hoofdpijn, niet lekker voelen, koorts, spierpijn, misselijkheid, braken, koude rillingen, diarree");
      const primaryButton = props.attributes.primaryButton ?? __("Meer over bijwerkingen");
      const primaryButtonLink = props.attributes.primaryButtonLink ?? __("/bijwerkingen");

      return el(
        "article",
        useBlockProps.save({
          class: "side-effects",
        }),
        [
          el(
            "h3",
            useBlockProps.save({
              class: "side-effects__title",
              id: 'attribute-title'
            }),
            title
          ),
          el(
            "p",
            useBlockProps.save({
              class: "side-effects__description",
              id: 'attribute-description'
            }),
            description
          ),
          el(
            "div",
            useBlockProps.save({
              class: "side-effects__button-container",
            }),
            [
              el(
                "a",
                useBlockProps.save({
                  class: "side-effects__button",
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
