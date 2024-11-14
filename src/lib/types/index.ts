// The file containing the types used in the website

// The type for the table of contents
export type TableOfContents = Map<string, {
    id: string, children: TableOfContents
}>;

// The type of the JSON data
// None of the types I tried got typescript to behave,
// so I'm setting it as any
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type JsonData = any;
