import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ObjSelectedProjectType = {
  label: string;
  name: string;
  href: string;
  sourcecode: string;
  isAvailable: boolean;
};

type AppState = {
  isOpenModalProjectDetails: boolean;
  objSelectedProject: ObjSelectedProjectType;
};

export const initialState: AppState = {
  isOpenModalProjectDetails: false,
  objSelectedProject: {
    label: "",
    name: "",
    href: "",
    sourcecode: "",
    isAvailable: true,
  },
};

const appSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    openModalProjectDetails(state, action: PayloadAction<ObjSelectedProjectType>) {
      state.isOpenModalProjectDetails = true;
      state.objSelectedProject = action.payload;
    },
    closeModalProjectDetails(state) {
      state.isOpenModalProjectDetails = false;
      state.objSelectedProject = initialState.objSelectedProject;
    },
  },
});

export const { openModalProjectDetails, closeModalProjectDetails } = appSlice.actions;
export default appSlice.reducer;
