import type { JSONSchema4 } from "json-schema";

export type ParamDesc = {
  description?: string;
  default?: string;
  options?: {
    value: string;
    label: string;
  }[];
  optional?: boolean;
};

export function parseJsonSchema(
  schema?: JSONSchema4
): Record<string, ParamDesc> {
  if (schema?.type !== "object") {
    return {};
  }
  const properties = schema.properties || {};
  const required = Array.isArray(schema.required) ? schema.required : [];
  const result: Record<string, ParamDesc> = {};

  for (const [key, value] of Object.entries(properties)) {
    if (typeof value === "boolean") continue;

    const propertySchema = value as JSONSchema4;
    const isOptional = !required.includes(key);

    // Extract default value
    const defaultValue =
      propertySchema.default !== undefined
        ? String(propertySchema.default)
        : undefined;

    // Extract options from enum
    const options = propertySchema.anyOf
      ? propertySchema.anyOf
          .filter((val) => "const" in val && "description" in val)
          .map((val) => ({
            label: String(val.description),
            value: String(val.const),
          }))
      : undefined;

    result[key] = {
      optional: isOptional,
      default: defaultValue,
      description: propertySchema.description,
      ...(options && { options }),
    };
  }
  return result;
}
