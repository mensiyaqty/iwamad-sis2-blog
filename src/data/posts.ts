export interface Post {
  id: number;
  title: string;
  summary: string;
  content: string;
}

export const posts: Post[] = [
  { id: 1, title: 'Getting Started with React', summary: 'Learn the basics of React components and props.', content: 'React is a popular JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces called components.' },
  { id: 2, title: 'Understanding TypeScript', summary: 'Why TypeScript makes your frontend code robust.', content: 'TypeScript extends JavaScript by adding types to the language. By catching errors early, it saves you time during debugging and scaling.' },
  { id: 3, title: 'Routing with React Router', summary: 'Navigate seamlessly between single-page app views.', content: 'React Router enables "client-side routing", allowing your application to update the URL from the browser history and keep the UI in sync.' },
  { id: 4, title: 'State Management in React', summary: 'Keep track of local state using hooks like useState.', content: 'Local state allows components to remember information over time, such as whether a button was clicked or what text is typed in an input.' },
  { id: 5, title: 'Writing Tests with Vitest', summary: 'Ensure your components work correctly before shipping.', content: 'Testing library and Vitest give you tools to render components, simulate user events, and assert that everything behaves as expected.' },
];