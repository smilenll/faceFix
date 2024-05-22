import { IFaceCreamResponse } from "../shared/interfaces/ai";

export const FaceCreamInfo = ({
  category,
  description,
}: IFaceCreamResponse) => {
  return (
    <div className="mt-12">
      <h1 className="flex justify-center text-lg font-bold">
        You should look for {category} type of cream.
      </h1>
      <br />
      <div>{description}</div>
    </div>
  );
};
