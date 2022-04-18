// Define layout for pages
type GetLayoutProps = (page: React.ReactElement) => React.ReactElement
type Page<> = NextPage<P> & {
  getLayout?: GetLayoutProps
}
type Props = AppProps & {
  Component: Page
}
