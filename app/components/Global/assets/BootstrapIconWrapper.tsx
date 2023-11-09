export const BootstrapIcon = ({
  width,
  height,
  className,
  viewBox,
  path,
  pathOne,
  pathTwo,
  pathThree,
  pathFour,
  pathFive,
}: {
  width: string;
  height: string;
  className: string;
  viewBox: string;
  path: string;
  pathOne?: string;
  pathTwo?: string;
  pathThree?: string;
  pathFour?: string;
  pathFive?: string;
}): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="currentColor"
      className={className}
      viewBox={viewBox}
    >
      <path d={path} />
      {pathOne && <path d={pathOne} />}
      {pathTwo && <path d={pathTwo} />}
      {pathThree && <path d={pathThree} />}
      {pathFour && <path d={pathFour} />}
      {pathFive && <path d={pathFive} />}
    </svg>
  );
};
