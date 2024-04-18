import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DisplayUser } from "@/types";
import { SupabaseClient } from "@supabase/supabase-js";
import { CommentsContext, SupabaseClientContext } from "@/lib/contexts";
import AuthDialog from "@/components/AuthDialog";

const defaultQueryClient = new QueryClient();

export interface CommentsProviderProps {
  queryClient?: QueryClient;
  supabaseClient: SupabaseClient;
  onAuthRequested?: () => void;
  onUserClick?: (user: DisplayUser) => void;
  mode?: "light" | "dark";
  children: ReactNode;
}

const CommentsProvider: FC<CommentsProviderProps> = ({
  supabaseClient,
  queryClient = defaultQueryClient,
  children,
  mode,
}) => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const context = useMemo(
    () => ({
      showAuthDialog,
      setShowAuthDialog,
      mode,
    }),
    [showAuthDialog, setShowAuthDialog, mode],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <SupabaseClientContext.Provider value={supabaseClient}>
        <CommentsContext.Provider value={context}>
          {children}
          <AuthDialog
            isOpen={showAuthDialog}
            onClose={() => setShowAuthDialog(false)}
          />
        </CommentsContext.Provider>
      </SupabaseClientContext.Provider>
    </QueryClientProvider>
  );
};

export default CommentsProvider;
