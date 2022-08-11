(function (blocks, editor, i18n, element, blockEditor) {
  const el = element.createElement;
  const __ = i18n.__;
  const RichText = editor.RichText;
  const useBlockProps = blockEditor.useBlockProps;

  blocks.registerBlockType("stepper/stichingvacinatieveiligheid-blocks", {
    example: {
      attributes: {
        content: __("Content van de Stepper."),
        iterator: __("1."),
      },
    },

    edit: function (props) {
      const content = props.attributes.content ?? __("Content van de Stepper.");
      const iterator = props.attributes.iterator ?? __('1.');

      return el(
        "div",
        useBlockProps({ style: { display: 'flex', 'flex-direction': 'row' } }),
        [
          el(
            'div',
            useBlockProps({
              style: {
                display: 'flex',
                'flex-direction': 'row',
                'align-items': 'center',
                margin: 0,
              }
            }),
            el(
              RichText,
              useBlockProps({
                tagName: "p",
                style: {
                  color: '#2b6697',
                  'padding-right': '8px',
                  'font-size': '1.5em',
                  'font-weight': 'bold',
                  margin: 0,
                },
                onChange: (newContent) => {
                  props.setAttributes({ iterator: newContent });
                },
                value: iterator,
                id: 'attribute-iterator'
              })
            ),
          ),
          el(
            'div',
            useBlockProps({style: {
              display: 'flex',
              flex: 1,
              'flex-direction': 'row',
              'align-items': 'center',
              margin: 0,
            }}),
            el(
              RichText,
              useBlockProps({
                tagName: "p",
                style: {
                  flex: 1,
                  color: '#000000',
                  'font-size': '1em',
                  margin: 0,
                },
                onChange: (newContent) => {
                  props.setAttributes({ content: newContent });
                },
                value: content,
                id: 'attribute-content'
              })
            ),
          ),
        ]
      );
    },

    save: function (props) {
      const content = props.attributes.content ?? __("Content van de Stepper.");
      const iterator = props.attributes.iterator ?? __('1.');

      return el(
        "section",
        useBlockProps.save({
          class: "stepper",
        }),
        [
          el(
            "div",
            useBlockProps.save({
              class: "stepper__iterator-container",
            }),
            el(
              "p",
              useBlockProps.save({
                class: "stepper__iterator",
                id: 'attribute-iterator'
              }),
              iterator
            ),
          ),
          el(
            "div",
            useBlockProps.save({
              class: "stepper__content-container",
            }),
            el(
              "p",
              useBlockProps.save({
                class: "stepper__content",
                id: 'attribute-content'
              }),
              content
            ),
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
