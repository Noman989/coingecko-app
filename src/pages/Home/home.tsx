import React from "react";
import { Table } from "../../components/table";
export interface HomeProps {
  name?: string;
}
export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex justify-center mt-12">
      <Table />
    </div>
  );
};
