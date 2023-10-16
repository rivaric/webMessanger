import { ErrorProps } from './Error.interface';
import './Error.scss';

export function Error({ message }: ErrorProps) {
  return <div className="error">{message}</div>;
}
