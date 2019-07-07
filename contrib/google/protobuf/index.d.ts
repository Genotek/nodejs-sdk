// autogenerated file

import * as grpc from 'grpc';
import { util } from 'protobufjs';
import Long = util.Long;
import * as events from 'events';

export interface Duration {
  seconds?: Long;

  nanos?: Long;
}

export interface Any {
  type_url?: string;

  value?: Buffer;
}

export interface Timestamp {
  seconds?: Long;

  nanos?: Long;
}

export interface FieldMask {
  paths?: string[];
}

export interface Empty {}

export interface DoubleValue {
  value?: number;
}

export interface FloatValue {
  value?: number;
}

export interface Int64Value {
  value?: Long;
}

export interface UInt64Value {
  value?: Long;
}

export interface Int32Value {
  value?: Long;
}

export interface UInt32Value {
  value?: Long;
}

export interface BoolValue {
  value?: boolean;
}

export interface StringValue {
  value?: string;
}

export interface BytesValue {
  value?: Buffer;
}

/**
 * Api is a light-weight descriptor for a protocol buffer service.
 */
export interface Api {
  /**
   * The fully qualified name of this api, including package name
   * followed by the api's simple name.
   */
  name?: string;

  /**
   * The methods of this api, in unspecified order.
   */
  methods?: Method[];

  /**
   * Any metadata attached to the API.
   */
  options?: Option[];

  /**
   * A version string for this api. If specified, must have the form
   * `major-version.minor-version`, as in `1.10`. If the minor version
   * is omitted, it defaults to zero. If the entire version field is
   * empty, the major version is derived from the package name, as
   * outlined below. If the field is not empty, the version in the
   * package name will be verified to be consistent with what is
   * provided here.
   *
   * The versioning schema uses [semantic
   * versioning](http://semver.org) where the major version number
   * indicates a breaking change and the minor version an additive,
   * non-breaking change. Both version numbers are signals to users
   * what to expect from different versions, and should be carefully
   * chosen based on the product plan.
   *
   * The major version is also reflected in the package name of the
   * API, which must end in `v<major-version>`, as in
   * `google.feature.v1`. For major versions 0 and 1, the suffix can
   * be omitted. Zero major versions must only be used for
   * experimental, none-GA apis.
   */
  version?: string;

  /**
   * Source context for the protocol buffer service represented by this
   * message.
   */
  sourceContext?: SourceContext;

  /**
   * Included APIs. See [Mixin][].
   */
  mixins?: Mixin[];

  /**
   * The source syntax of the service.
   */
  syntax?: Syntax;
}

/**
 * Method represents a method of an api.
 */
export interface Method {
  /**
   * The simple name of this method.
   */
  name?: string;

  /**
   * A URL of the input message type.
   */
  requestTypeUrl?: string;

  /**
   * If true, the request is streamed.
   */
  requestStreaming?: boolean;

  /**
   * The URL of the output message type.
   */
  responseTypeUrl?: string;

  /**
   * If true, the response is streamed.
   */
  responseStreaming?: boolean;

  /**
   * Any metadata attached to the method.
   */
  options?: Option[];

  /**
   * The source syntax of this method.
   */
  syntax?: Syntax;
}

/**
 * Declares an API to be included in this API. The including API must
 * redeclare all the methods from the included API, but documentation
 * and options are inherited as follows:
 *
 * - If after comment and whitespace stripping, the documentation
 * string of the redeclared method is empty, it will be inherited
 * from the original method.
 *
 * - Each annotation belonging to the service config (http,
 * visibility) which is not set in the redeclared method will be
 * inherited.
 *
 * - If an http annotation is inherited, the path pattern will be
 * modified as follows. Any version prefix will be replaced by the
 * version of the including API plus the [root][] path if specified.
 *
 * Example of a simple mixin:
 *
 * package google.acl.v1;
 * service AccessControl {
 * // Get the underlying ACL object.
 * rpc GetAcl(GetAclRequest) returns (Acl) {
 * option (google.api.http).get = "/v1/{resource=**}:getAcl";
 * }
 * }
 *
 * package google.storage.v2;
 * service Storage {
 * rpc GetAcl(GetAclRequest) returns (Acl);
 *
 * // Get a data record.
 * rpc GetData(GetDataRequest) returns (Data) {
 * option (google.api.http).get = "/v2/{resource=**}";
 * }
 * }
 *
 * Example of a mixin configuration:
 *
 * apis:
 * - name: google.storage.v2.Storage
 * mixins:
 * - name: google.acl.v1.AccessControl
 *
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inherting
 * documentation and annotations as follows:
 *
 * service Storage {
 * // Get the underlying ACL object.
 * rpc GetAcl(GetAclRequest) returns (Acl) {
 * option (google.api.http).get = "/v2/{resource=**}:getAcl";
 * }
 * ...
 * }
 *
 * Note how the version in the path pattern changed from `v1` to `v2`.
 *
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 *
 * apis:
 * - name: google.storage.v2.Storage
 * mixins:
 * - name: google.acl.v1.AccessControl
 * root: acls
 *
 * This implies the following inherited HTTP annotation:
 *
 * service Storage {
 * // Get the underlying ACL object.
 * rpc GetAcl(GetAclRequest) returns (Acl) {
 * option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 * }
 * ...
 * }
 */
export interface Mixin {
  /**
   * The fully qualified name of the API which is included.
   */
  name?: string;

  /**
   * If non-empty specifies a path under which inherited HTTP paths
   * are rooted.
   */
  root?: string;
}

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file?: FileDescriptorProto[];
}

/**
 * Describes a complete .proto file.
 */
export interface FileDescriptorProto {
  /**
   * file name, relative to root of source tree
   */
  name?: string;

  /**
   * file name, relative to root of source tree
   */
  package?: string;

  /**
   * Names of files imported by this file.
   */
  dependency?: string[];

  /**
   * Indexes of the public imported files in the dependency list above.
   */
  publicDependency?: Long[];

  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weakDependency?: Long[];

  /**
   * All top-level definitions in this file.
   */
  messageType?: DescriptorProto[];

  enumType?: EnumDescriptorProto[];

  service?: ServiceDescriptorProto[];

  extension?: FieldDescriptorProto[];

  options?: FileOptions;

  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  sourceCodeInfo?: SourceCodeInfo;

  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax?: string;
}

/**
 * Describes a message type.
 */
export interface DescriptorProto {
  name?: string;

  field?: FieldDescriptorProto[];

  extension?: FieldDescriptorProto[];

  nestedType?: DescriptorProto[];

  enumType?: EnumDescriptorProto[];

  extensionRange?: DescriptorProto.ExtensionRange[];

  oneofDecl?: OneofDescriptorProto[];

  options?: MessageOptions;

  reservedRange?: DescriptorProto.ReservedRange[];

  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reservedName?: string[];
}

export namespace DescriptorProto {
  export interface ExtensionRange {
    start?: Long;

    end?: Long;
  }

  /**
   * Range of reserved tag numbers. Reserved tag numbers may not be used by
   * fields or extension ranges in the same message. Reserved ranges may
   * not overlap.
   */
  export interface ReservedRange {
    /**
     * Inclusive.
     */
    start?: Long;

    /**
     * Inclusive.
     */
    end?: Long;
  }
}

/**
 * Describes a field within a message.
 */
export interface FieldDescriptorProto {
  name?: string;

  number?: Long;

  label?: FieldDescriptorProto.Label;

  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type?: FieldDescriptorProto.Type;

  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  typeName?: string;

  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee?: string;

  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  defaultValue?: string;

  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneofIndex?: Long;

  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  jsonName?: string;

  options?: FieldOptions;
}

export namespace FieldDescriptorProto {
  export enum Type {
    /**
     * 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    TYPE_DOUBLE = 1,

    TYPE_FLOAT = 2,

    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    TYPE_INT64 = 3,

    TYPE_UINT64 = 4,

    /**
     * Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    TYPE_INT32 = 5,

    TYPE_FIXED64 = 6,

    TYPE_FIXED32 = 7,

    TYPE_BOOL = 8,

    TYPE_STRING = 9,

    /**
     * Tag-delimited aggregate.
     */
    TYPE_GROUP = 10,

    /**
     * Tag-delimited aggregate.
     */
    TYPE_MESSAGE = 11,

    /**
     * New in version 2.
     */
    TYPE_BYTES = 12,

    TYPE_UINT32 = 13,

    TYPE_ENUM = 14,

    TYPE_SFIXED32 = 15,

    TYPE_SFIXED64 = 16,

    /**
     * Uses ZigZag encoding.
     */
    TYPE_SINT32 = 17,

    /**
     * Uses ZigZag encoding.
     */
    TYPE_SINT64 = 18
  }

  export enum Label {
    /**
     * 0 is reserved for errors
     */
    LABEL_OPTIONAL = 1,

    LABEL_REQUIRED = 2,

    LABEL_REPEATED = 3
  }
}

/**
 * Describes a oneof.
 */
export interface OneofDescriptorProto {
  name?: string;

  options?: OneofOptions;
}

/**
 * Describes an enum type.
 */
export interface EnumDescriptorProto {
  name?: string;

  value?: EnumValueDescriptorProto[];

  options?: EnumOptions;
}

/**
 * Describes a value within an enum.
 */
export interface EnumValueDescriptorProto {
  name?: string;

  number?: Long;

  options?: EnumValueOptions;
}

/**
 * Describes a service.
 */
export interface ServiceDescriptorProto {
  name?: string;

  method?: MethodDescriptorProto[];

  options?: ServiceOptions;
}

/**
 * Describes a method of a service.
 */
export interface MethodDescriptorProto {
  name?: string;

  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  inputType?: string;

  outputType?: string;

  options?: MethodOptions;

  /**
   * Identifies if client streams multiple client messages
   */
  clientStreaming?: boolean;

  /**
   * Identifies if server streams multiple server messages
   */
  serverStreaming?: boolean;
}

export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  'javaPackage'?: string;

  /**
   * If set, all the classes from the .proto file are wrapped in a single
   * outer class with the given name.  This applies to both Proto1
   * (equivalent to the old "--one_java_file" option) and Proto2 (where
   * a .proto always translates to a single class, but you may want to
   * explicitly choose the class name).
   */
  'javaOuterClassname'?: string;

  /**
   * If set true, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the outer class
   * named by java_outer_classname.  However, the outer class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  'javaMultipleFiles'?: boolean;

  /**
   * If set true, then the Java code generator will generate equals() and
   * hashCode() methods for all messages defined in the .proto file.
   * This increases generated code size, potentially substantially for large
   * protos, which may harm a memory-constrained application.
   * - In the full runtime this is a speed optimization, as the
   * AbstractMessage base class includes reflection-based implementations of
   * these methods.
   * - In the lite runtime, setting this option changes the semantics of
   * equals() and hashCode() to more closely match those of the full runtime;
   * the generated methods compute their results based on field values rather
   * than object identity. (Implementations should not assume that hashcodes
   * will be consistent across runtimes or versions of the protocol compiler.)
   */
  'javaGenerateEqualsAndHash'?: boolean;

  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  'javaStringCheckUtf8'?: boolean;

  'optimizeFor'?: FileOptions.OptimizeMode;

  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   * - The basename of the package import path, if provided.
   * - Otherwise, the package statement in the .proto file, if present.
   * - Otherwise, the basename of the .proto file, without extension.
   */
  'goPackage'?: string;

  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   *
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  'ccGenericServices'?: boolean;

  'javaGenericServices'?: boolean;

  'pyGenericServices'?: boolean;

  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  'deprecated'?: boolean;

  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  'ccEnableArenas'?: boolean;

  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  'objcClassPrefix'?: string;

  /**
   * Namespace for generated classes; defaults to the package.
   */
  'csharpNamespace'?: string;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.tools.file'?: FileOptions;
}

export namespace FileOptions {
  /**
   * Generated classes can be optimized for speed or code size.
   */
  export enum OptimizeMode {
    /**
     * Generate complete code for parsing, serialization,
     * etc.
     */
    SPEED = 1,

    /**
     * Generate complete code for parsing, serialization,
     * etc.
     */
    CODE_SIZE = 2,

    /**
     * Use ReflectionOps to implement these methods.
     */
    LITE_RUNTIME = 3
  }
}

export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   *
   * The message must be defined exactly as follows:
   * message Foo {
   * option message_set_wire_format = true;
   * extensions 4 to max;
   * }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   *
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   *
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  'messageSetWireFormat'?: boolean;

  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  'noStandardDescriptorAccessor'?: boolean;

  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  'deprecated'?: boolean;

  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   *
   * For maps fields:
   * map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   * message MapFieldEntry {
   * option map_entry = true;
   * optional KeyType key = 1;
   * optional ValueType value = 2;
   * }
   * repeated MapFieldEntry map_field = 1;
   *
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementions still need to work as
   * if the field is a repeated message field.
   *
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  'mapEntry'?: boolean;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.tools.message'?: MessageOptions;
}

export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  'ctype'?: FieldOptions.CType;

  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  'packed'?: boolean;

  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  By default these types are
   * represented as JavaScript strings.  This avoids loss of precision that can
   * happen when a large value is converted to a floating point JavaScript
   * numbers.  Specifying JS_NUMBER for the jstype causes the generated
   * JavaScript code to use the JavaScript "number" type instead of strings.
   * This option is an enum to permit additional types to be added,
   * e.g. goog.math.Integer.
   */
  'jstype'?: FieldOptions.JSType;

  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   *
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   *
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   *
   *
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outher message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  'lazy'?: boolean;

  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  'deprecated'?: boolean;

  /**
   * For Google-internal migration only. Do not use.
   */
  'weak'?: boolean;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.tools.field'?: FieldOptions;

  '.yandex.cloud.required'?: boolean;

  '.yandex.cloud.pattern'?: string;

  '.yandex.cloud.value'?: string;

  '.yandex.cloud.size'?: string;

  '.yandex.cloud.length'?: string;

  '.yandex.cloud.mapKey'?: MapKeySpec;
}

export namespace FieldOptions {
  export enum CType {
    /**
     * Default mode.
     */
    STRING = 0,

    CORD = 1,

    STRING_PIECE = 2
  }

  export enum JSType {
    /**
     * Use the default type.
     */
    JS_NORMAL = 0,

    /**
     * Use JavaScript strings.
     */
    JS_STRING = 1,

    /**
     * Use JavaScript numbers.
     */
    JS_NUMBER = 2
  }
}

export interface OneofOptions {
  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.cloud.exactlyOne'?: boolean;
}

export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  'allowAlias'?: boolean;

  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  'deprecated'?: boolean;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.tools.enumeration'?: EnumOptions;
}

export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  'deprecated'?: boolean;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.tools.value'?: EnumValueOptions;
}

export interface ServiceOptions {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  'deprecated'?: boolean;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.tools.service'?: ServiceOptions;
}

export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  'deprecated'?: boolean;

  /**
   * The parser stores options it doesn't recognize here. See above.
   */
  'uninterpretedOption'?: UninterpretedOption[];

  '.yandex.api.operation'?: Operation;

  '.yandex.api.tools.method'?: MethodOptions;

  '.google.api.http'?: HttpRule;
}

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name?: UninterpretedOption.NamePart[];

  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifierValue?: string;

  positiveIntValue?: Long;

  negativeIntValue?: Long;

  doubleValue?: number;

  stringValue?: Buffer;

  aggregateValue?: string;
}

export namespace UninterpretedOption {
  /**
   * The name of the uninterpreted option.  Each string represents a segment in
   * a dot-separated name.  is_extension is true iff a segment represents an
   * extension (denoted with parentheses in options specs in .proto files).
   * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
   * "foo.(bar.baz).qux".
   */
  export interface NamePart {
    namePart?: string;

    isExtension?: boolean;
  }
}

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   *
   * For example, say we have a file like:
   * message Foo {
   * optional string foo = 1;
   * }
   * Let's look at just the field definition:
   * optional string foo = 1;
   * ^       ^^     ^^  ^  ^^^
   * a       bc     de  f  ghi
   * We have the following locations:
   * span   path               represents
   * [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   * [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   * [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   * [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   * [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   * particular index within it).  This is used whenever a set of elements are
   * logically enclosed in a single code segment.  For example, an entire
   * extend block (possibly containing multiple extension definitions) will
   * have an outer location whose path refers to the "extensions" repeated
   * field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   * logical declaration is spread out across multiple places.  The most
   * obvious example is the "extend" block again -- there may be multiple
   * extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   * example, the "extendee" of an extension declaration appears at the
   * beginning of the "extend" block and is shared by all extensions within
   * the block.
   * - Just because a location's span is a subset of some other location's span
   * does not mean that it is a descendent.  For example, a "group" defines
   * both a type and a field in a single declaration.  Thus, the locations
   * corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   * ignore those that it doesn't understand, as more types of locations could
   * be recorded in the future.
   */
  location?: SourceCodeInfo.Location[];
}

export namespace SourceCodeInfo {
  export interface Location {
    /**
     * Identifies which part of the FileDescriptorProto was defined at this
     * location.
     *
     * Each element is a field number or an index.  They form a path from
     * the root FileDescriptorProto to the place where the definition.  For
     * example, this path:
     * [ 4, 3, 2, 7, 1 ]
     * refers to:
     * file.message_type(3)  // 4, 3
     * .field(7)         // 2, 7
     * .name()           // 1
     * This is because FileDescriptorProto.message_type has field number 4:
     * repeated DescriptorProto message_type = 4;
     * and DescriptorProto.field has field number 2:
     * repeated FieldDescriptorProto field = 2;
     * and FieldDescriptorProto.name has field number 1:
     * optional string name = 1;
     *
     * Thus, the above path gives the location of a field name.  If we removed
     * the last element:
     * [ 4, 3, 2, 7 ]
     * this path refers to the whole field declaration (from the beginning
     * of the label to the terminating semicolon).
     */
    path?: Long[];

    /**
     * Always has exactly three or four elements: start line, start column,
     * end line (optional, otherwise assumed same as start line), end column.
     * These are packed into a single field for efficiency.  Note that line
     * and column numbers are zero-based -- typically you will want to add
     * 1 to each before displaying to a user.
     */
    span?: Long[];

    /**
     * If this SourceCodeInfo represents a complete declaration, these are any
     * comments appearing before and after the declaration which appear to be
     * attached to the declaration.
     *
     * A series of line comments appearing on consecutive lines, with no other
     * tokens appearing on those lines, will be treated as a single comment.
     *
     * leading_detached_comments will keep paragraphs of comments that appear
     * before (but not connected to) the current element. Each paragraph,
     * separated by empty lines, will be one comment element in the repeated
     * field.
     *
     * Only the comment content is provided; comment markers (e.g. //) are
     * stripped out.  For block comments, leading whitespace and an asterisk
     * will be stripped from the beginning of each line other than the first.
     * Newlines are included in the output.
     *
     * Examples:
     *
     * optional int32 foo = 1;  // Comment attached to foo.
     * // Comment attached to bar.
     * optional int32 bar = 2;
     *
     * optional string baz = 3;
     * // Comment attached to baz.
     * // Another line attached to baz.
     *
     * // Comment attached to qux.
     * //
     * // Another line attached to qux.
     * optional double qux = 4;
     *
     * // Detached comment for corge. This is not leading or trailing comments
     * // to qux or corge because there are blank lines separating it from
     * // both.
     *
     * // Detached comment for corge paragraph 2.
     *
     * optional string corge = 5;
     *
     * * to corge.  Leading asterisks
     *
     *
     *
     * optional int32 grault = 6;
     *
     * // ignored detached comments.
     */
    leadingComments?: string;

    trailingComments?: string;

    leadingDetachedComments?: string[];
  }
}

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation?: GeneratedCodeInfo.Annotation[];
}

export namespace GeneratedCodeInfo {
  export interface Annotation {
    /**
     * Identifies the element in the original source .proto file. This field
     * is formatted the same as SourceCodeInfo.Location.path.
     */
    path?: Long[];

    /**
     * Identifies the filesystem path to the original source .proto.
     */
    sourceFile?: string;

    /**
     * Identifies the starting offset in bytes in the generated code
     * that relates to the identified object.
     */
    begin?: Long;

    /**
     * Identifies the ending offset in bytes in the generated code that
     * relates to the identified offset. The end offset should be one past
     * the last relevant byte (so the length of the text = end - begin).
     */
    end?: Long;
  }
}

/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   */
  fileName?: string;
}

export interface Struct {
  fields?: { [s: string]: Value };
}

export interface Value {
  nullValue?: NullValue;

  numberValue?: number;

  stringValue?: string;

  boolValue?: boolean;

  structValue?: Struct;

  listValue?: ListValue;
}

export enum NullValue {
  NULL_VALUE = 0
}

export interface ListValue {
  values?: Value[];
}

/**
 * A protocol buffer message type.
 */
export interface Type {
  /**
   * The fully qualified message name.
   */
  name?: string;

  /**
   * The list of fields.
   */
  fields?: Field[];

  /**
   * The list of types appearing in `oneof` definitions in this type.
   */
  oneofs?: string[];

  /**
   * The protocol buffer options.
   */
  options?: Option[];

  /**
   * The source context.
   */
  sourceContext?: SourceContext;

  /**
   * The source syntax.
   */
  syntax?: Syntax;
}

/**
 * A single field of a message type.
 */
export interface Field {
  /**
   * The field type.
   */
  kind?: Field.Kind;

  /**
   * The field cardinality.
   */
  cardinality?: Field.Cardinality;

  /**
   * The field number.
   */
  number?: Long;

  /**
   * The field name.
   */
  name?: string;

  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   */
  typeUrl?: string;

  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   */
  oneofIndex?: Long;

  /**
   * Whether to use alternative packed wire representation.
   */
  packed?: boolean;

  /**
   * The protocol buffer options.
   */
  options?: Option[];

  /**
   * The field JSON name.
   */
  jsonName?: string;

  /**
   * The string value of the default value of this field. Proto2 syntax only.
   */
  defaultValue?: string;
}

export namespace Field {
  /**
   * Basic field types.
   */
  export enum Kind {
    /**
     * Field type unknown.
     */
    TYPE_UNKNOWN = 0,

    /**
     * Field type double.
     */
    TYPE_DOUBLE = 1,

    /**
     * Field type float.
     */
    TYPE_FLOAT = 2,

    /**
     * Field type int64.
     */
    TYPE_INT64 = 3,

    /**
     * Field type uint64.
     */
    TYPE_UINT64 = 4,

    /**
     * Field type int32.
     */
    TYPE_INT32 = 5,

    /**
     * Field type fixed64.
     */
    TYPE_FIXED64 = 6,

    /**
     * Field type fixed32.
     */
    TYPE_FIXED32 = 7,

    /**
     * Field type bool.
     */
    TYPE_BOOL = 8,

    /**
     * Field type string.
     */
    TYPE_STRING = 9,

    /**
     * Field type group. Proto2 syntax only, and deprecated.
     */
    TYPE_GROUP = 10,

    /**
     * Field type message.
     */
    TYPE_MESSAGE = 11,

    /**
     * Field type bytes.
     */
    TYPE_BYTES = 12,

    /**
     * Field type uint32.
     */
    TYPE_UINT32 = 13,

    /**
     * Field type enum.
     */
    TYPE_ENUM = 14,

    /**
     * Field type sfixed32.
     */
    TYPE_SFIXED32 = 15,

    /**
     * Field type sfixed64.
     */
    TYPE_SFIXED64 = 16,

    /**
     * Field type sint32.
     */
    TYPE_SINT32 = 17,

    /**
     * Field type sint64.
     */
    TYPE_SINT64 = 18
  }

  /**
   * Whether a field is optional, required, or repeated.
   */
  export enum Cardinality {
    /**
     * For fields with unknown cardinality.
     */
    CARDINALITY_UNKNOWN = 0,

    /**
     * For optional fields.
     */
    CARDINALITY_OPTIONAL = 1,

    /**
     * For required fields. Proto2 syntax only.
     */
    CARDINALITY_REQUIRED = 2,

    /**
     * For repeated fields.
     */
    CARDINALITY_REPEATED = 3
  }
}

/**
 * Enum type definition.
 */
export interface Enum {
  /**
   * Enum type name.
   */
  name?: string;

  /**
   * Enum value definitions.
   */
  enumvalue?: EnumValue[];

  /**
   * Protocol buffer options.
   */
  options?: Option[];

  /**
   * The source context.
   */
  sourceContext?: SourceContext;

  /**
   * The source syntax.
   */
  syntax?: Syntax;
}

/**
 * Enum value definition.
 */
export interface EnumValue {
  /**
   * Enum value name.
   */
  name?: string;

  /**
   * Enum value number.
   */
  number?: Long;

  /**
   * Protocol buffer options.
   */
  options?: Option[];
}

/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface Option {
  /**
   * The option's name. For example, `"java_package"`.
   */
  name?: string;

  /**
   * The option's value. For example, `"com.google.protobuf"`.
   */
  value?: Any;
}

/**
 * The syntax in which a protocol buffer element is defined.
 */
export enum Syntax {
  /**
   * Syntax `proto2`.
   */
  SYNTAX_PROTO2 = 0,

  /**
   * Syntax `proto3`.
   */
  SYNTAX_PROTO3 = 1
}
