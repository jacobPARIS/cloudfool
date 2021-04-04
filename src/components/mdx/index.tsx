import DefaultLayout from '../../layouts'
import CodeBlock from './code-block'
export default {
  DefaultLayout,
  h1: (props: any) => (
    <h1 class="text-4xl font-black mb-6 text-gray-800" {...props} />
  ),
  h2: (props: any) => (
    <h2 class="text-3xl font-bold mb-6 text-gray-800" {...props} />
  ),
  h3: (props: any) => (
    <h3 class="text-2xl font-bold mb-6 text-gray-800" {...props} />
  ),
  h4: (props: any) => (
    <h4 class="text-xl font-bold mb-6 text-gray-800" {...props} />
  ),
  h5: (props: any) => (
    <h5 class="text-lg font-bold mb-6 text-gray-800" {...props} />
  ),
  h6: (props: any) => (
    <h6 class="text-md font-semibold mb-6 text-gray-800" {...props} />
  ),
  a: (props: any) => <a class="text-blue-700 underline" {...props} />,
  p: (props: any) => <p class="mb-4" {...props} />,
  li: (props: any) => <li class="list-disc" {...props} />,
  ul: (props: any) => <ul class="ml-5 mb-4" {...props} />,
  ins: (props: any) => <ins class="-mx-4 px-4 block bg-green-800" {...props} />,
  del: (props: any) => <ins class="-mx-4 px-4 block bg-red-800" {...props} />,
  blockquote: (props: any) => <blockquote class="italic" {...props} />,
  pre: (props: any) => (
    <CodeBlock
      language={props.children.props.className || ''}
      metastring={props.children.props.metastring}
    >
      {props.children.props.children}
    </CodeBlock>
  ),
}
