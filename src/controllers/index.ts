import { Request, Response } from "express";
import db from "../db/db";

/**
 * GET /
 * Home page.
 */
export const index = async (req: Request, res: Response): Promise<void> => {

    // DB test space

    db.then(() => console.log('DB end'));

    // DB test space end

    res.render("index", { title: "Express" });
};
