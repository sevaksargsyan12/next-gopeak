import { IconRoutArrow } from "shared/icons/common-icons";

interface RoutingPathProps {
  paths: string[];
}

const RoutingPath = ({ paths }: RoutingPathProps) => {
  const length = paths.length;

  return (
    <p className="position-absolute t-25-px l-102-px">
      {paths.map((path, i) => (
        <span key={i} className="text-color-routing-path text-xxs me-8">
          {path}
          {length !== i + 1 && <IconRoutArrow className="ms-5" />}
        </span>
      ))}
    </p>
  );
};

export default RoutingPath;
