import { Button } from "@/shared/ui/Button";
import { Title } from "@/shared/ui/Title";
import React from "react";
import { useNavigate } from "react-router";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => navigate(-1);

  return (
    <div className="container flex flex-col items-center gap-10">
      <Title type="h2" position="center">Oops...</Title>
      <h3 className="text-5xl text-accent-light-gray">Error 404: page not found</h3>
      <Button type="button" variant="black" className="max-w-[200px]" onClick={handleBackButtonClick}>
        Return back
      </Button>
    </div>
  );
};

export default NotFoundPage;
