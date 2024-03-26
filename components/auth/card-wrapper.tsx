import { FC, ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  subtitleLabel?: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper: FC<CardWrapperProps> = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
  subtitleLabel,
}) => {
  return (
    <Card className=" w-[400px] shadow-md bg-black text-white border-input ">
      <CardHeader>
        <h3 className=" pb-2">{headerLabel}</h3>
        {subtitleLabel && <p>{subtitleLabel}</p>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
