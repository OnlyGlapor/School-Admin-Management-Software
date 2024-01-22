
export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/*<i>{error.statusText || error.message}</i>*/}
      </p>
    </div>
  );
}