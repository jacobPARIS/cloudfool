import DefaultLayout from '../../layouts'
import AnimationFilterBoolean from './animation-filter-boolean'
import AnimationFilterGte from './animation-filter-gte'
import AnimationFilterLt from './animation-filter-lt'
import AnimationFilterMod from './animation-filter-mod'
import AnimationMap from './animation-map'
import AnimationMapLowercase from './animation-map-lowercase'
import AnimationMapReactList from './animation-map-react-list'
import AnimationMapReactListIndex from './animation-map-react-list-index'
import AnimationReduceGt from './animation-reduce-gt'
import AnimationReduceSum from './animation-reduce-sum'
import CodeBlock from './code-block'
import PageComponent from './page-component'
import SideNote from './side-note'
import TestTextInput from './test-text-input'
import TestTextInputAsync from './test-text-input-async'
import Tweet from './tweet'

export default {
  DefaultLayout,
  AnimationMap,
  AnimationMapLowercase,
  AnimationMapReactList,
  AnimationMapReactListIndex,
  AnimationReduceSum,
  AnimationReduceGt,
  AnimationFilterLt,
  AnimationFilterGte,
  AnimationFilterMod,
  AnimationFilterBoolean,
  SideNote,
  Tweet,
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
    <h1 className="mt-10 mb-4 leading-tight text-28 font-300" {...props} />
  ),
  h2: (props: any) => <h2 className="mt-10 mb-4 text-24 font-300" {...props} />,
  h3: (props: any) => <h3 className="mt-10 mb-4 font-500" {...props} />,
  h4: (props: any) => <s {...props} />,
  h5: (props: any) => <s {...props} />,
  h6: (props: any) => <s {...props} />,
  em: (props: any) => (
    <em
      className="p-1 bg-yellow-100"
      style={{outline: '0.25rem solid #fdeaa099'}}
      {...props}
    />
  ),
  a: (props: any) => <a {...props} />,
  p: (props: any) => <p className="mb-5 " {...props} />,
  li: (props: any) => <li className="list-disc" {...props} />,
  ul: (props: any) => <ul className="mb-4 ml-5" {...props} />,
  ol: (props: any) => <ol className="mb-4 ml-5" {...props} />,
  ins: (props: any) => (
    <ins className="block px-4 -mx-4 bg-green-800" {...props} />
  ),
  del: (props: any) => (
    <ins className="block px-4 -mx-4 bg-blue-800" {...props} />
  ),

  'link-icon': (props: any) => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  ),
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
