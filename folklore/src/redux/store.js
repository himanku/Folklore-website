import {legacy_createStore,compose,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { reducer as AdminFurnitureReducer } from "./Admin/AdminFurniture/reducer"
import { reducer as AdminDressReducer } from "./Admin/AdminDresses/reducer"
import { reducer as AdminUserReducer } from "./Admin/AdminUserManagement/reducer"
import { Authreducer } from "./Auth/auth.reducer"
import { Cartreducer } from "./Cart/car.reducer"
import { Productreducer } from "./Product/product.reducer"


const rootReducer=combineReducers({
    furniture:AdminFurnitureReducer,
    dress: AdminDressReducer,
    adminUser: AdminUserReducer,
    product:Productreducer,
    cart:Cartreducer,
    auth: Authreducer
})

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store=legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))