import { create } from 'zustand';

export interface AppointmentRecord {
  id: string;
  name: string;
  phone: string;
  type: string;
  department: string;
  date: string;
  time: string;
  remark: string;
  status: '待确认' | '已确认' | '已取消';
  createdAt: string;
}

interface AppointmentState {
  records: AppointmentRecord[];
  addRecord: (data: Omit<AppointmentRecord, 'id' | 'status' | 'createdAt'>) => AppointmentRecord;
  cancelRecord: (id: string) => void;
}

let counter = 0;

function generateId(): string {
  counter += 1;
  const now = new Date();
  const dateStr = now.getFullYear().toString().slice(2) +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0');
  return `QM${dateStr}${String(counter).padStart(4, '0')}`;
}

export const useAppointmentStore = create<AppointmentState>((set) => ({
  records: [],
  addRecord: (data) => {
    const record: AppointmentRecord = {
      ...data,
      id: generateId(),
      status: '待确认',
      createdAt: new Date().toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    set((state) => ({ records: [record, ...state.records] }));
    return record;
  },
  cancelRecord: (id) => {
    set((state) => ({
      records: state.records.map((r) =>
        r.id === id ? { ...r, status: '已取消' as const } : r
      ),
    }));
  },
}));
