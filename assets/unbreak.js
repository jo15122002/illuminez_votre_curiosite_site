export function unbreackableText(text, lang) {
    if (text) {
      if (lang === 'en') {
        return text
          .replaceAll(/\s*\?/g, '?')
          .replaceAll(/\s*!/g, '!')
          .replaceAll(
            /(\s*:)(?![\w\s\t]*=?[\s\t]*"{1}[^"]*"{1}[^<>"]*>{1})(?![^>"]*"{1}[\s\t]*>{1})(?!\/\/)/g,
            ':'
          )
      } else if (lang === 'fr') {
        return text
          .replaceAll(/\s*\?/g, '\u00A0?')
          .replaceAll(/\s*!/g, '\u00A0!')
          .replaceAll(
            /(\s*:)(?![\w\s\t]*=?[\s\t]*"{1}[^"]*"{1}[^<>"]*>{1})(?![^>"]*"{1}[\s\t]*>{1})(?!\/\/)/g,
            '\u00A0:'
          )
      }
    }
}