import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import App from "../App";

import { useAuth } from '../src/contexts/auth';
import Dashboard from '../src/pages/Dashboard'
import OrphanagesMap from '../src/pages/OrphanagesMap'
import UserLogin from "../src/pages/User/UserLogin";
import UserRegister from "../src/pages/User/UserRegister";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";



const Routes: React.FC = () => {
  const { signed, loading  } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
  // return  <AuthRoutes />
};

export default Routes;