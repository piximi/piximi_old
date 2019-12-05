import { useCallback, useState } from 'react';

export const useDialog = () => {
  const [openedDialog, setOpenedDialog] = useState(false);

  const closeDialog = useCallback(() => {
    setOpenedDialog(false);
  }, []);

  const openDialog = useCallback(() => {
    setOpenedDialog(true);
  }, []);

  return {
    closeDialog,
    openDialog,
    openedDialog
  };
};
