import { useEffect, useState, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  children: ReactNode;
}

const AdminRoute = ({ children }: Props) => {
  const [status, setStatus] = useState<"loading" | "allowed" | "denied">("loading");

  useEffect(() => {
    let active = true;

    const check = async (userId: string | undefined) => {
      if (!userId) {
        if (active) setStatus("denied");
        return;
      }
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();
      if (!active) return;
      setStatus(!error && data ? "allowed" : "denied");
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      check(session?.user?.id);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      check(session?.user?.id);
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (status === "denied") return <Navigate to="/auth" replace />;
  return <>{children}</>;
};

export default AdminRoute;
