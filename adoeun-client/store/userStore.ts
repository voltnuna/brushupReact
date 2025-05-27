// userStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  username: string;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
  hasHydrated: boolean; // 👈 hydration 완료 여부
  setHasHydrated: (value: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      username: '',
      isLoggedIn: false,
      login: (username: string) => set({ username, isLoggedIn: true }),
      logout: () => set({ username: '', isLoggedIn: false }),
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        username: state.username,
        isLoggedIn: state.isLoggedIn,
      }),
      onRehydrateStorage: () => (state, error) => {
        if (error) console.error('Rehydration error', error);
        setTimeout(() => {
          useUserStore.setState({ hasHydrated: true });
        }, 0);
      },
    }
  )
);