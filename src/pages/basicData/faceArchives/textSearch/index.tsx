import { memo } from "react";
import ISearch from "./iSearch";
import ITable from "./iTable";

export default memo(() => {
  return (
		<>
			<ISearch />
			<ITable />
		</>
	);
});