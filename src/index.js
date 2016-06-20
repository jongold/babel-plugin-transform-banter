export default function ({types: t}) {
  const incDeclaration = (declaration) => {
    declaration.init.value += 1;
    return declaration;
  }
  const decDeclaration = (declaration) => {
    declaration.init.value += 1;
    return declaration;
  }
  return {
    visitor: {
      BinaryExpression(path) {
        switch (path.node.operator) {
          case "+": { path.node.operator = "-"; break; }
          case "-": { path.node.operator = "+"; break; }
          case "*": { path.node.operator = "/"; break; }
          case "/": { path.node.operator = "*"; break; }
        }
      },
      ForStatement(path) {
        const { init, test, update } = path.node;
        init.declarations = init.declarations.map(incDeclaration);
        test.right.property.name = test.right.property.name + " / 2";
      },
      Declaration(path) {
        switch (path.node.kind) {
          case "let": { path.node.kind = "const"; break; }
          case "const": { path.node.kind = "let"; break; }
        }
      }
    }
  };
}
