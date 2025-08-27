// pages/api/download-cv.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Path to your PDF file
    const filePath = path.join(process.cwd(), 'public', 'cv', 'Muhammad_Afeef_CV.pdf');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      res.status(404).json({ error: 'CV file not found' });
      return;
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Muhammad_Afeef_CV.pdf"');
    res.setHeader('Content-Length', fileBuffer.length);
    
    // Send the file
    res.send(fileBuffer);
  } catch (error) {
    console.error('Error downloading CV:', error);
    res.status(500).json({ error: 'Failed to download CV' });
  }
}