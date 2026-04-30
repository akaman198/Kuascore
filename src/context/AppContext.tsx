"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export type Transaction = {
  id: string;
  name: string;
  amount: number;
  date: string;
  type: "in" | "out";
};

export type User = {
  name: string;
  phone: string;
  balance: number;
  score: number;
  savings: number;
  savingsGoal: number;
  transactions: Transaction[];
};

interface AppContextType {
  user: User | null;
  login: (phone: string) => boolean;
  signup: (name: string, phone: string) => void;
  logout: () => void;
  addTransaction: (name: string, amount: number, type: "in" | "out") => void;
  saveMoney: (amount: number) => void;
  unlockOffers: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("kuascore_user");
      if (storedUser) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(JSON.parse(storedUser));
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (!user && pathname !== "/login" && pathname !== "/signup") {
        router.push("/login");
      } else if (user && (pathname === "/login" || pathname === "/signup")) {
        router.push("/");
      }
    }
  }, [user, isLoaded, pathname, router]);

  const saveUser = (newUser: User) => {
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem("kuascore_user", JSON.stringify(newUser));
    }
  };

  const login = (phone: string) => {
    // For prototype: mock login based on local storage
    if (typeof window !== "undefined") {
      const storedUserStr = localStorage.getItem("kuascore_user");
      if (storedUserStr) {
        const storedUser: User = JSON.parse(storedUserStr);
        if (storedUser.phone === phone) {
          setUser(storedUser);
          router.push("/");
          return true;
        }
      }
    }
    // If not found, create a mock one or return false
    return false;
  };

  const signup = (name: string, phone: string) => {
    const newUser: User = {
      name,
      phone,
      balance: 1500, // Initial balance
      score: 650, // Starting score
      savings: 0,
      savingsGoal: 500,
      transactions: [
        {
          id: "1",
          name: "Initial Deposit",
          amount: 1500,
          date: new Date().toLocaleString(),
          type: "in",
        },
      ],
    };
    saveUser(newUser);
    router.push("/");
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("kuascore_user");
    }
    router.push("/login");
  };

  const addTransaction = (name: string, amount: number, type: "in" | "out") => {
    if (!user) return;
    const newTx: Transaction = {
      id: Date.now().toString(),
      name,
      amount,
      date: new Date().toLocaleString(),
      type,
    };
    const newBalance =
      type === "in" ? user.balance + amount : user.balance - amount;
    // Every 5 transactions, boost score
    const newScore =
      user.transactions.length % 3 === 0
        ? Math.min(1000, user.score + 15)
        : user.score;

    saveUser({
      ...user,
      balance: newBalance,
      score: newScore,
      transactions: [newTx, ...user.transactions],
    });
  };

  const saveMoney = (amount: number) => {
    if (!user) return;
    if (user.balance >= amount) {
      const newTx: Transaction = {
        id: Date.now().toString(),
        name: "Smart Savings Deposit",
        amount,
        date: new Date().toLocaleString(),
        type: "out",
      };
      saveUser({
        ...user,
        balance: user.balance - amount,
        savings: user.savings + amount,
        transactions: [newTx, ...user.transactions],
      });
    }
  };

  const unlockOffers = () => {
    if (!user) return;
    saveUser({
      ...user,
      balance: user.balance + 500,
      transactions: [
        {
          id: Date.now().toString(),
          name: "Micro-Loan Disbursement",
          amount: 500,
          date: new Date().toLocaleString(),
          type: "in",
        },
        ...user.transactions,
      ],
    });
  };

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        addTransaction,
        saveMoney,
        unlockOffers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
