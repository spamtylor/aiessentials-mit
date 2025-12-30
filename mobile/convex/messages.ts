import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const send = mutation({
    args: { body: v.string(), author: v.string() },
    handler: async (ctx, { body, author }) => {
        await ctx.db.insert("messages", { body, author });

        // Auto-reply to add "Vibe"
        if (author !== "Ghost") {
            await ctx.db.insert("messages", {
                body: "🌊 Vibe check passed! This is a real-time message from the cloud.",
                author: "Ghost"
            });
        }
    },
});
