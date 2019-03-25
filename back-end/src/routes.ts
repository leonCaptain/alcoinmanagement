import {UserController} from "./controller/UserController";
import {PortfolioController} from "./controller/PortfolioController";
import {PortfolioCoinController} from "./controller/PortfolioCoinController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route: "/portfolio/:uid",
    controller: PortfolioController,
    action: "all"
}, {
    method: "post",
    route: "/portfolio",
    controller: PortfolioController,
    action: "save"
}, {
    method: "get",
    route: "/portfolioCoin/:pid",
    controller: PortfolioCoinController,
    action: "all"
}, {
    method: "post",
    route: "/portfolioCoin",
    controller: PortfolioCoinController,
    action: "save"
}, {
    method: "delete",
    route: "/portfolioCoin/:pcid",
    controller: PortfolioCoinController,
    action: "remove"
}];
