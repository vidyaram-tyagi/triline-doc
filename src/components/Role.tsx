import React from "react";
import { getSession } from "../utils/session";

export function AdminOnly({ children }: { children: React.ReactNode }) {
  const session = getSession();
  if (session?.role !== "admin") return null;
  return <>{children}</>;
}

export function UserOnly({ children }: { children: React.ReactNode }) {
  const session = getSession();
  if (session?.role !== "user") return null;
  return <>{children}</>;
}

