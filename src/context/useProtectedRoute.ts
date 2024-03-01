import { router, useRootNavigation, useSegments } from "expo-router";
import React from "react";
import { AgentAutenticated } from "./context.dtos/Authenticate.dto";

function useProtectedRoute({token,agent_id}:AgentAutenticated) {

    const segments = useSegments();
    const rootNavigation = useRootNavigation();
    console.log("segments", segments)
    console.log("segments", rootNavigation?.isReady())

    React.useEffect(() => {
      const inAuthGroup = segments[0] === '(auth)';
      if (!rootNavigation?.isReady()) {

        return;
      }
      
      if (
        // If the user is not signed in and the initial segment is not anything in the auth group.
        !token 
        ) {

        // Redirect to the sign-in page.
        router.replace('/sign-in');
      } else if (token &&agent_id) {
        // Redirect away from the sign-in page.
        router.replace('/(tabs)');

      }
    }, [token,agent_id]);
  }

  export{useProtectedRoute}