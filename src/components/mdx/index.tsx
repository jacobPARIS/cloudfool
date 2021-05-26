import DefaultLayout from '../../layouts'
import CodeBlock from './code-block'
import TestTextInput from './test-text-input'
import TestTextInputAsync from './test-text-input-async'
import PageComponent from './page-component'
export default {
  DefaultLayout,
  TestTextInput: (props: any) => (
    <PageComponent>
      <TestTextInput {...props} />
    </PageComponent>
  ),
  TestTextInputAsync: (props: any) => (
    <PageComponent>
      <TestTextInputAsync {...props} />
    </PageComponent>
  ),
  h1: (props: any) => (
    <h1
      className="mt-10 mb-4 leading-tight text-gray-800 text-28 font-300"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2 className="mt-10 mb-4 text-gray-500 text-24 font-300" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-10 mb-4 text-gray-500 font-500" {...props} />
  ),
  h4: (props: any) => <s {...props} />,
  h5: (props: any) => <s {...props} />,
  h6: (props: any) => <s {...props} />,
  a: (props: any) => <a className="text-blue-700 underline" {...props} />,
  p: (props: any) => <p className="mb-5 " {...props} />,
  li: (props: any) => <li className="text-gray-600 list-disc" {...props} />,
  ul: (props: any) => <ul className="mb-4 ml-5" {...props} />,
  ins: (props: any) => (
    <ins className="block px-4 -mx-4 bg-green-800" {...props} />
  ),
  del: (props: any) => (
    <ins className="block px-4 -mx-4 bg-red-800" {...props} />
  ),

  code: (props: any) => <code className="bg-red-600 text-16" {...props} />,
  blockquote: (props: any) => <blockquote className="italic" {...props} />,
  pre: (props: any) => (
    <CodeBlock
      language={props.children.props.className || ''}
      metastring={props.children.props.metastring}
    >
      {props.children.props.children}
    </CodeBlock>
  ),
}
