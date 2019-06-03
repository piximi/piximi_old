import { useState } from 'react';

function useCollapseList() {
  const [collapsedList, setCollapsedList] = useState(false);

  const collapseList = () => {
    setCollapsedList(!collapsedList);
  };

  return { collapsedList, collapseList };
}

export default useCollapseList;
