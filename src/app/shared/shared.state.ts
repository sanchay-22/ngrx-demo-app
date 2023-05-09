import { ApiState } from './shared.model';
import { StateEnum } from './shared.enum';
import { loaderReducer } from './shared.reducer';



export interface AppStateModel {
    [StateEnum.LOADER]: ApiState;
}

export const appReducer = {
   [StateEnum.LOADER]: loaderReducer
}
