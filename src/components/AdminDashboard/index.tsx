import React, {useEffect} from 'react';
import {Admin, Resource} from 'react-admin'
import ProductList from "./Product/ProductList";
import myRestProvider from "./myRestProvider";
import ProductEdit from "./Product/ProductEdit";
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ProductCreate from "./Product/ProductCreate";
import OrderList from "./Order/OrderList";
import OrderEdit from "./Order/OrderEdit";
import MyLayout from "./AdminLayout";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/hooks/useAuth";
import {useAdmin} from "../../utils/hooks/useAdmin";
import UserList from "./User/UserList";
import UserEdit from "./User/UserEdit";

interface AdminDashboardProps {

}


const AdminDashboard: React.FC<AdminDashboardProps> = () => {

    const navigate = useNavigate();
    const isAuth = useAuth()
    const isAdmin = useAdmin()

    useEffect(() => {
        if (!isAuth || !isAdmin) {
            return navigate("/");
        }
    }, [isAuth, isAdmin]);



    return (
        <Admin dataProvider={myRestProvider} basename="/dashboard" layout={MyLayout}>
            <Resource name='product'
                      list={ProductList}
                      edit={ProductEdit}
                      create={ProductCreate}
                      icon={InventoryIcon}/>
            <Resource name='order'
                      list={OrderList}
                      edit={OrderEdit}
                      icon={ShoppingCartIcon}
            />
            <Resource name='auth'
                      list={UserList}
                      edit={UserEdit}
                      icon={PersonIcon}
            />
        </Admin>
    );
};

export default AdminDashboard;