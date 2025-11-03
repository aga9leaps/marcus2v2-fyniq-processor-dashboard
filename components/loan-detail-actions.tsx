'use client';

import { Button } from '@/components/ui/button';
import { Phone, Mail, CheckSquare, Square, Upload, FileText } from 'lucide-react';

export function CallButton({ borrowerName }: { borrowerName: string }) {
  return (
    <Button
      size="sm"
      className="bg-accent-primary hover:bg-accent-secondary text-white"
      onClick={() => alert(`📞 Calling ${borrowerName}...\n\n(Phase 2: Twilio click-to-call integration)`)}
    >
      <Phone className="w-4 h-4 mr-2" />
      Call Now
    </Button>
  );
}

export function EmailButton({ borrowerEmail }: { borrowerEmail: string }) {
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => alert(`📧 Email to: ${borrowerEmail}\n\n(Phase 2: Email integration)`)}
    >
      <Mail className="w-4 h-4 mr-2" />
      Email
    </Button>
  );
}

export function TaskCheckbox({
  taskTitle,
  checked
}: {
  taskTitle: string;
  checked: boolean;
}) {
  return (
    <button
      className="text-text-secondary hover:text-accent-primary"
      onClick={() =>
        alert(
          `${checked ? '✓' : '☐'} "${taskTitle}"\n\n` +
            (checked
              ? '(Phase 2: Uncheck task)'
              : '(Phase 2: Mark task as complete)')
        )
      }
    >
      {checked ? (
        <CheckSquare className="w-5 h-5 text-status-success" />
      ) : (
        <Square className="w-5 h-5" />
      )}
    </button>
  );
}

export function AddTaskButton() {
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() =>
        alert(
          '➕ Add New Task\n\n(Phase 2: Task creation modal)\n\n' +
            'Fields:\n' +
            '• Task name\n' +
            '• Priority (low/medium/high/urgent)\n' +
            '• Due date\n' +
            '• Assigned to\n' +
            '• Description'
        )
      }
    >
      + Add Task
    </Button>
  );
}

export function RequestDocumentButton({ documentName }: { documentName: string }) {
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() =>
        alert(
          `📄 Request "${documentName}"\n\n` +
            '(Phase 2: Send automated email to borrower)\n\n' +
            'Email will include:\n' +
            '• Document name\n' +
            '• Upload link\n' +
            '• Due date reminder'
        )
      }
    >
      <Mail className="w-3 h-3 mr-1" />
      Request from Borrower
    </Button>
  );
}

export function UploadDocumentButton() {
  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() =>
        alert(
          '📤 Upload Document\n\n' +
            '(Phase 2: File upload modal)\n\n' +
            'Features:\n' +
            '• Drag & drop\n' +
            '• Multiple files\n' +
            '• Auto OCR text extraction\n' +
            '• Document type detection'
        )
      }
    >
      <Upload className="w-3 h-3 mr-1" />
      Upload
    </Button>
  );
}

export function ViewDocumentButton({ documentName }: { documentName: string }) {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() =>
        alert(
          `👁 View "${documentName}"\n\n` +
            '(Phase 2: Document viewer)\n\n' +
            'Features:\n' +
            '• PDF preview\n' +
            '• Annotations\n' +
            '• Download\n' +
            '• Version history'
        )
      }
    >
      <FileText className="w-3 h-3" />
    </Button>
  );
}
