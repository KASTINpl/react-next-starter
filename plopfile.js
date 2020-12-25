module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{name}}/index.tsx',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
    ],
  })
}
