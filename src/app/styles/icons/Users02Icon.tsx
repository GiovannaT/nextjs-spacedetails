import * as React from "react";

export const Users02Icon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 3.468a4.5 4.5 0 0 1 0 8.064m2 5.234c1.512.684 2.872 1.799 4 3.234M2 20c1.946-2.477 4.59-4 7.5-4s5.554 1.523 7.5 4M14 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" />
    </svg>
  );
});

Users02Icon.displayName = "Users02Icon";

export default Users02Icon;
