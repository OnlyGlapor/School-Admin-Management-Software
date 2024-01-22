
const Breadcrumbs = ({ breadcrumbs, onBreadcrumbClick }) => {
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.id}>
          <span onClick={() => onBreadcrumbClick(index)}>
            {breadcrumb.name}
          </span>
          {index < breadcrumbs.length - 1 && ' > '}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;